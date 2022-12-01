import { handler as createAccountHook } from "./useAccount";
import { handler as createNetworkHook } from "./useNetwork";
import { handler as createOwnedCoursesHook } from "./useOwnedCourses";
import { handler as createwnedCourseHook } from "./useOwnedCourse";
import { handler as createManagedCoursesHook } from "./useManagedCourses";

export const setupHooks = ({ web3, provider, contract }) => {
  return {
    useAccount: createAccountHook(web3, provider),
    useNetwork: createNetworkHook(web3, provider),
    useOwnedCourses: createOwnedCoursesHook(web3, contract),
    useOwnedCourse: createwnedCourseHook(web3, contract),
    useManagedCourses: createManagedCoursesHook(web3, contract),
  };
};
