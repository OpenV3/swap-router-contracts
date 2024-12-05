import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

import { MISC_INFO } from "../../scripts/misc-addresses";
import { getChainId } from "../../scripts/utils";

export default buildModule("SwapRouterContracts", (m) => {
  const chainId = getChainId();

  // These addresses should be configured per network
  const FACTORY_V3 = MISC_INFO[chainId]?.POOL_FACTORY!;
  const WRAPPED_NATIVE = MISC_INFO[chainId]?.WRAPPED_NATIVE!;
  const POSITION_MANAGER = MISC_INFO[chainId]?.NONFUNGIBLE_POSITION_MANAGER!;
  const FACTORY_V2 = MISC_INFO[chainId]?.FACTORY_V2!;

  // Deploy MixedRouteQuoterV1
  const mixedRouteQuoter = m.contract(
    "MixedRouteQuoterV1",
    [
      FACTORY_V3,    // _factory (V3)
      FACTORY_V2,    // _factoryV2
      WRAPPED_NATIVE // _WETH9
    ]
  );

  // Deploy SwapRouter02
  const swapRouter02 = m.contract(
    "SwapRouter02",
    [
      FACTORY_V2,      // _factoryV2
      FACTORY_V3,      // factoryV3
      POSITION_MANAGER, // _positionManager
      WRAPPED_NATIVE   // _WETH9
    ]
  );

  // Return all deployed contracts
  return {
    mixedRouteQuoter,
    swapRouter02
  };
});