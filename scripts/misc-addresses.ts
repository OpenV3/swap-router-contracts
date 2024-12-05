import { SupportedChainId } from "./chains";

type Address = `0x${string}`;

export interface MiscInfo {
  POOL_FACTORY: Address; // the UniswapV3Factory
  FACTORY_V2: Address; // the UniswapV2Factory
  WRAPPED_NATIVE: Address;
  WRAPPED_NATIVE_SYMBOL: string;
  NONFUNGIBLE_POSITION_MANAGER: Address;
}

export const MISC_INFO: Partial<Record<SupportedChainId, MiscInfo>> = {
  [SupportedChainId.INK_SEPOLIA]: {
      POOL_FACTORY: "0xcfEA11557Bc9cB71bc6916e09fC8493D668b8d53",
      FACTORY_V2: "0x5cfE73b0238Bb3E636Dc4e68a31bEe5d7fbEa1fa",
      WRAPPED_NATIVE: "0x4200000000000000000000000000000000000006",
      WRAPPED_NATIVE_SYMBOL: "WETH9",
      NONFUNGIBLE_POSITION_MANAGER: "0x34513e8A327987Bb44acF5A925a7f3b4092d8b5F",
  },
};
