import { useState, useMemo, useCallback, useEffect } from "react";
import {
  Box,
  Container,
  Stack,
  Heading,
  Text,
  Spacer,
  Input,
  InputGroup,
  Flex,
  Separator,
} from "@chakra-ui/react";
import {
  NativeSelectRoot,
  NativeSelectField,
  NativeSelect,
} from "@chakra-ui/react";
import Footer from "../components/Footer";

// Types
interface InvestmentParams {
  initialDeposit: number;
  yearsOfGrowth: number;
  rateOfReturn: number;
  compoundFrequency: number;
  contributionAmount: number;
  contributionFrequency: "monthly" | "annually";
}

interface YearData {
  year: number;
  principal: number;
  interest: number;
  total: number;
}

// Pure calculation functions
function calculateCompoundInterest(params: InvestmentParams): YearData[] {
  const {
    initialDeposit,
    yearsOfGrowth,
    rateOfReturn,
    compoundFrequency,
    contributionAmount,
    contributionFrequency,
  } = params;

  const rate = rateOfReturn / 100;
  const data: YearData[] = [];

  // Determine how often to compound per year
  const periodsPerYear = compoundFrequency;
  const totalPeriods = yearsOfGrowth * periodsPerYear;
  const ratePerPeriod = rate / periodsPerYear;

  // Determine contribution per period
  const contributionsPerYear = contributionFrequency === "monthly" ? 12 : 1;
  const contributionPerPeriod =
    contributionAmount * (contributionsPerYear / periodsPerYear);

  let balance = initialDeposit;
  let totalContributions = initialDeposit;

  // Add initial state
  data.push({
    year: 0,
    principal: initialDeposit,
    interest: 0,
    total: initialDeposit,
  });

  // Calculate for each compounding period
  for (let period = 1; period <= totalPeriods; period++) {
    // Add interest (compound)
    balance = balance * (1 + ratePerPeriod);

    // Add contribution for this period
    balance += contributionPerPeriod;
    totalContributions += contributionPerPeriod;

    // Store data at year boundaries
    if (period % periodsPerYear === 0) {
      const year = period / periodsPerYear;
      const interest = balance - totalContributions;

      data.push({
        year,
        principal: totalContributions,
        interest,
        total: balance,
      });
    }
  }

  return data;
}

function formatCurrency(amount: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(amount);
}

function getYAxisLabel(value: number): string {
  if (value >= 1000) {
    return `$${(value / 1000).toFixed(0)}k`;
  }
  return `$${value}`;
}

// Chart Component
function InvestmentChart({ data }: { data: YearData[] }) {
  const width = 800;
  const height = 400;
  const padding = { top: 20, right: 40, bottom: 60, left: 60 };
  const chartWidth = width - padding.left - padding.right;
  const chartHeight = height - padding.top - padding.bottom;

  const maxTotal = Math.max(...data.map((d) => d.total));
  const maxYear = Math.max(...data.map((d) => d.year));
  const currentYear = new Date().getFullYear();

  // Scale functions
  const xScale = useCallback(
    (year: number) => padding.left + (year / maxYear) * chartWidth,
    [maxYear, chartWidth, padding.left]
  );
  const yScale = useCallback(
    (value: number) =>
      padding.top + chartHeight - (value / maxTotal) * chartHeight,
    [maxTotal, chartHeight, padding.top]
  );

  // Create path for area chart (principal + interest)
  const totalAreaPath = useMemo(() => {
    const pathData = data.map((d, i) => {
      const x = xScale(d.year);
      const y = yScale(d.total);
      return i === 0 ? `M ${x} ${y}` : `L ${x} ${y}`;
    });

    // Close the path to bottom
    pathData.push(`L ${xScale(maxYear)} ${yScale(0)}`);
    pathData.push(`L ${xScale(0)} ${yScale(0)}`);
    pathData.push("Z");

    return pathData.join(" ");
  }, [data, maxYear, xScale, yScale]);

  // Create path for principal area
  const principalAreaPath = useMemo(() => {
    const pathData = data.map((d, i) => {
      const x = xScale(d.year);
      const y = yScale(d.principal);
      return i === 0 ? `M ${x} ${y}` : `L ${x} ${y}`;
    });

    // Close the path to bottom
    pathData.push(`L ${xScale(maxYear)} ${yScale(0)}`);
    pathData.push(`L ${xScale(0)} ${yScale(0)}`);
    pathData.push("Z");

    return pathData.join(" ");
  }, [data, maxYear, xScale, yScale]);

  // Create line path
  const linePath = useMemo(() => {
    return data
      .map((d, i) => {
        const x = xScale(d.year);
        const y = yScale(d.total);
        return i === 0 ? `M ${x} ${y}` : `L ${x} ${y}`;
      })
      .join(" ");
  }, [data, xScale, yScale]);

  // Y-axis labels
  const yAxisTicks = [0, 0.25, 0.5, 0.75, 1].map((ratio) =>
    Math.round(maxTotal * ratio)
  );

  // X-axis labels
  const xAxisYears = [0, Math.floor(maxYear / 2), maxYear];

  return (
    <Box w="100%">
      <svg
        width="100%"
        height="100%"
        style={{ maxWidth: "100%", height: "auto" }}
        viewBox={`0 0 ${width} ${height}`}
        preserveAspectRatio="xMidYMid meet"
      >
        {/* Grid lines */}
        {yAxisTicks.map((tick) => (
          <line
            key={`grid-${tick}`}
            x1={padding.left}
            y1={yScale(tick)}
            x2={width - padding.right}
            y2={yScale(tick)}
            stroke="currentColor"
            strokeOpacity="0.1"
            strokeWidth="1"
          />
        ))}

        {/* Interest area (green) */}
        <path d={totalAreaPath} fill="#22C55E" fillOpacity="0.2" />

        {/* Principal area (blue) */}
        <path d={principalAreaPath} fill="#3B82F6" fillOpacity="0.3" />

        {/* Line */}
        <path
          d={linePath}
          fill="none"
          stroke="#059669"
          strokeWidth="2.5"
          strokeLinejoin="round"
          strokeLinecap="round"
        />

        {/* Y-axis */}
        <line
          x1={padding.left}
          y1={padding.top}
          x2={padding.left}
          y2={height - padding.bottom}
          stroke="currentColor"
          strokeOpacity="0.2"
        />

        {/* Y-axis labels */}
        {yAxisTicks.map((tick) => (
          <text
            key={`y-label-${tick}`}
            x={padding.left - 10}
            y={yScale(tick)}
            textAnchor="end"
            alignmentBaseline="middle"
            fontSize="12"
            fill="currentColor"
            opacity="0.6"
          >
            {getYAxisLabel(tick)}
          </text>
        ))}

        {/* X-axis */}
        <line
          x1={padding.left}
          y1={height - padding.bottom}
          x2={width - padding.right}
          y2={height - padding.bottom}
          stroke="currentColor"
          strokeOpacity="0.2"
        />

        {/* X-axis labels */}
        {xAxisYears.map((year) => (
          <text
            key={`x-label-${year}`}
            x={xScale(year)}
            y={height - padding.bottom + 25}
            textAnchor="middle"
            fontSize="12"
            fill="currentColor"
            opacity="0.6"
          >
            {year === 0 ? "Now" : currentYear + year}
          </text>
        ))}

        {/* X-axis title */}
        <text
          x={width / 2}
          y={height - 10}
          textAnchor="middle"
          fontSize="13"
          fill="currentColor"
          opacity="0.5"
        >
          Year
        </text>
      </svg>
    </Box>
  );
}

export default function CompoundInterestCalculator() {
  const [params, setParams] = useState<InvestmentParams>({
    initialDeposit: 5000,
    yearsOfGrowth: 0,
    rateOfReturn: 0,
    compoundFrequency: 12,
    contributionAmount: 100,
    contributionFrequency: "monthly",
  });

  // Prevent SEO indexing of this page
  useEffect(() => {
    const metaRobots = document.createElement("meta");
    metaRobots.name = "robots";
    metaRobots.content = "noindex, nofollow";
    document.head.appendChild(metaRobots);

    return () => {
      document.head.removeChild(metaRobots);
    };
  }, []);

  // Calculate data reactively, using defaults if 0
  const chartData = useMemo(() => {
    const calculationParams = {
      ...params,
      yearsOfGrowth: params.yearsOfGrowth || 1,
      rateOfReturn: params.rateOfReturn || 7,
    };
    return calculateCompoundInterest(calculationParams);
  }, [params]);
  const finalBalance = chartData[chartData.length - 1]?.total || 0;

  const updateParam = <K extends keyof InvestmentParams>(
    key: K,
    value: InvestmentParams[K]
  ) => {
    setParams((prev) => ({ ...prev, [key]: value }));
  };

  // Helper to handle text input as numbers
  const handleNumberInput = (
    key:
      | "initialDeposit"
      | "yearsOfGrowth"
      | "rateOfReturn"
      | "contributionAmount",
    inputValue: string
  ) => {
    // Allow empty string (will default to 0)
    if (inputValue === "") {
      updateParam(key, 0);
      return;
    }

    // Allow numbers with optional decimal point
    // This regex allows: digits, one decimal point, and handles negative (if needed)
    const numericPattern = /^-?\d*\.?\d*$/;

    if (numericPattern.test(inputValue)) {
      const numValue = parseFloat(inputValue);

      // Only update if it's a valid number (not NaN)
      // If it ends with a decimal point, that's OK - let them continue typing
      if (!isNaN(numValue)) {
        updateParam(key, numValue);
      } else if (inputValue === "-" || inputValue.endsWith(".")) {
        // Allow typing decimal point or negative sign
        return;
      }
    }
  };

  // Helper to handle arrow key navigation
  const handleArrowKeys = (
    e: React.KeyboardEvent<HTMLInputElement>,
    key:
      | "initialDeposit"
      | "yearsOfGrowth"
      | "rateOfReturn"
      | "contributionAmount",
    increment: number
  ) => {
    if (e.key === "ArrowUp" || e.key === "ArrowDown") {
      e.preventDefault();
      let currentValue = params[key];

      // Use defaults when fields are empty (0)
      if (key === "yearsOfGrowth" && currentValue === 0) {
        currentValue = 1;
      } else if (key === "rateOfReturn" && currentValue === 0) {
        currentValue = 7;
      }

      const change = e.key === "ArrowUp" ? increment : -increment;
      const newValue = Math.max(0, currentValue + change);
      updateParam(key, newValue);
    }
  };

  const inputStyles = {
    fontWeight: "medium",
    fontSize: { base: "xl", md: "2xl" },
    _placeholder: {
      color: { _light: "gray.400", _dark: "gray.400" },
      fontWeight: "400",
    },
    bg: { _light: undefined, _dark: "gray.600" },
  };

  return (
    <Box>
      <Container maxW="8xl" py={{ base: 12, lg: 20 }}>
        <Stack gap={6}>
          <Heading
            size={{ base: "3xl", md: "4xl" }}
            mb={{ base: 2, md: 4 }}
            textAlign="center"
          >
            The 8th wonder of the world
          </Heading>

          {/* Unified Container */}
          <Box
            bg={{ base: "gray.50", _dark: "gray.700" }}
            borderRadius="2xl"
            overflow="hidden"
            border="1px solid"
            borderColor="gray.200"
            _dark={{ borderColor: "gray.600" }}
          >
            <Flex
              direction={{ base: "column", lg: "row" }}
              minH={{ lg: "500px" }}
              alignItems={{ base: "center", lg: "stretch" }}
            >
              {/* Left Column - Inputs */}
              <Flex
                p={{ base: 6, md: 8 }}
                w={{ base: "100%", lg: "450px" }}
                flexShrink={0}
              >
                <Stack gap={6} w="100%">
                  {/* Initial Deposit */}
                  <Stack gap={2}>
                    <Text fontWeight="medium">Initial deposit</Text>
                    <InputGroup startAddon={<Text fontSize="xl">$</Text>}>
                      <Input
                        type="text"
                        size="xl"
                        inputMode="decimal"
                        value={params.initialDeposit || ""}
                        onChange={(e) =>
                          handleNumberInput("initialDeposit", e.target.value)
                        }
                        onKeyDown={(e) =>
                          handleArrowKeys(e, "initialDeposit", 1000)
                        }
                        {...inputStyles}
                      />
                    </InputGroup>
                  </Stack>

                  {/* Years of Growth and Rate of Return - Side by Side */}
                  <Flex gap={6} direction={{ base: "column", md: "row" }}>
                    {/* Years of Growth */}
                    <Stack gap={2} flex="1">
                      <Text fontWeight="medium">Years of growth</Text>
                      <InputGroup endAddon={<Text fontSize="xl">yrs</Text>}>
                        <Input
                          type="text"
                          size="xl"
                          inputMode="numeric"
                          value={params.yearsOfGrowth || ""}
                          onChange={(e) =>
                            handleNumberInput("yearsOfGrowth", e.target.value)
                          }
                          onKeyDown={(e) =>
                            handleArrowKeys(e, "yearsOfGrowth", 1)
                          }
                          placeholder="1"
                          {...inputStyles}
                          flex="1"
                        />
                      </InputGroup>
                    </Stack>

                    {/* Rate of Return */}
                    <Stack gap={2} flex="1">
                      <Text fontWeight="medium">Rate of return (est)</Text>
                      <InputGroup endAddon={<Text fontSize="xl">%</Text>}>
                        <Input
                          type="text"
                          size="xl"
                          inputMode="decimal"
                          value={params.rateOfReturn || ""}
                          onChange={(e) =>
                            handleNumberInput("rateOfReturn", e.target.value)
                          }
                          onKeyDown={(e) =>
                            handleArrowKeys(e, "rateOfReturn", 0.5)
                          }
                          {...inputStyles}
                          placeholder="7"
                          flex="1"
                        />
                      </InputGroup>
                    </Stack>
                  </Flex>

                  <Separator />

                  {/* Contribution Amount */}
                  <Stack gap={2}>
                    <Flex justify="space-between" align="center">
                      <Text fontWeight="medium">Contribution amount</Text>

                      {/* Contribution Frequency Dropdown */}
                      <NativeSelectRoot
                        size="sm"
                        variant="plain"
                        height="auto"
                        w="auto"
                        py={0}
                        px={2}
                      >
                        <NativeSelectField
                          value={params.contributionFrequency}
                          onChange={(e) =>
                            updateParam(
                              "contributionFrequency",
                              e.target.value as "monthly" | "annually"
                            )
                          }
                          fontSize="sm"
                          color="gray.600"
                          _dark={{ color: "gray.400" }}
                          cursor="pointer"
                          border="none"
                          outline="none"
                          p={0}
                          pr={5}
                          fontWeight="medium"
                        >
                          <option value="monthly">Monthly</option>
                          <option value="annually">Annually</option>
                        </NativeSelectField>
                        <NativeSelect.Indicator
                          color="gray.600"
                          _dark={{ color: "gray.400" }}
                        />
                      </NativeSelectRoot>
                    </Flex>

                    <InputGroup startAddon={<Text fontSize="xl">$</Text>}>
                      <Input
                        type="text"
                        size="xl"
                        inputMode="decimal"
                        placeholder="0"
                        value={params.contributionAmount || ""}
                        onChange={(e) =>
                          handleNumberInput(
                            "contributionAmount",
                            e.target.value
                          )
                        }
                        onKeyDown={(e) =>
                          handleArrowKeys(e, "contributionAmount", 100)
                        }
                        {...inputStyles}
                      />
                    </InputGroup>
                  </Stack>
                  <Spacer />
                  {/* Compound Frequency */}
                  <Flex justify="center" align="center" gap={1}>
                    <NativeSelectRoot
                      size="md"
                      variant="plain"
                      height="auto"
                      w="auto"
                      py={0}
                      px={2}
                    >
                      <NativeSelectField
                        value={params.compoundFrequency}
                        onChange={(e) =>
                          updateParam(
                            "compoundFrequency",
                            Number(e.target.value)
                          )
                        }
                        fontSize="md"
                        color="gray.600"
                        _dark={{ color: "gray.400" }}
                        cursor="pointer"
                        border="none"
                        outline="none"
                        p={0}
                        pr={5}
                        fontWeight="medium"
                      >
                        <option value={1}>Compound annually</option>
                        <option value={4}>Compound quarterly</option>
                        <option value={12}>Compound monthly</option>
                        <option value={365}>Compound daily</option>
                      </NativeSelectField>
                      <NativeSelect.Indicator
                        color="gray.600"
                        _dark={{ color: "gray.400" }}
                      />
                    </NativeSelectRoot>
                  </Flex>
                </Stack>
              </Flex>

              {/* Vertical Separator */}
              <Separator
                orientation="vertical"
                display={{ base: "none", lg: "block" }}
                h="auto"
              />

              {/* Right Column - Results */}
              <Box
                p={{ base: 6, md: 8 }}
                flex="1"
                display="flex"
                flexDirection="column"
                justifyContent="center"
                gap={8}
              >
                {/* Total Balance Display */}
                <Stack gap={2} align="center" textAlign="center">
                  <Text
                    fontSize="xl"
                    fontWeight="medium"
                    color="gray.500"
                    _dark={{ color: "gray.400" }}
                  >
                    Total Balance
                  </Text>
                  <Heading
                    size={{ base: "4xl", md: "5xl", lg: "6xl" }}
                    color="green.600"
                    _dark={{ color: "green.400" }}
                  >
                    {formatCurrency(finalBalance)}
                  </Heading>
                </Stack>

                {/* Chart */}
                <Box w="100%">
                  <InvestmentChart data={chartData} />

                  {/* Legend */}
                  <Flex gap={6} justify="center" mt={6}>
                    <Flex align="center" gap={2}>
                      <Box w={4} h={4} bg="blue.500" borderRadius="sm" />
                      <Text
                        fontSize="sm"
                        color="gray.600"
                        _dark={{ color: "gray.400" }}
                      >
                        Total principal
                      </Text>
                    </Flex>
                    <Flex align="center" gap={2}>
                      <Box w={4} h={4} bg="green.500" borderRadius="sm" />
                      <Text
                        fontSize="sm"
                        color="gray.600"
                        _dark={{ color: "gray.400" }}
                      >
                        Total interest
                      </Text>
                    </Flex>
                  </Flex>
                </Box>
              </Box>
            </Flex>
          </Box>
        </Stack>
      </Container>

      <Footer />
    </Box>
  );
}
