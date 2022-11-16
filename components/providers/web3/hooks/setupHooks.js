import { handler as createAccountHook } from "./useAccount";
import { handler as createNetworkHook } from "./useNetwork";
import { handler as useOwnedCourses } from "./useOwnedCourses";

export const setupHooks = ({ web3, provider, contract }) => {
  return {
    useAccount: createAccountHook(web3, provider),
    useNetwork: createNetworkHook(web3, provider),
    useOwnedCourses: useOwnedCourses(web3, contract),
  };
};
