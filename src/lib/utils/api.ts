/**
 * Simulates a network delay between min and max milliseconds
 * @param minMs Minimum delay in milliseconds (default: 200)
 * @param maxMs Maximum delay in milliseconds (default: 800)
 */
export const simulateNetworkDelay = async (
  minMs = 200,
  maxMs = 800
): Promise<void> => {
  const delay = Math.floor(Math.random() * (maxMs - minMs + 1)) + minMs;
  await new Promise((resolve) => setTimeout(resolve, delay));
};
