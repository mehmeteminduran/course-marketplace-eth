import { useEffect, useState } from "react";
import useSWR from "swr";

const adminAddresses = {
  "0xe918199e56d2eb20178d4b9caf3c7101f200e70b298a42ad871fe857fc727368": true,
};

export const handler = (web3, provider) => () => {
  const { data, mutate, ...rest } = useSWR(
    () => {
      return web3 ? "web3/accounts" : null;
    },
    async () => {
      const accounts = await web3.eth.getAccounts();
      const account = accıounts[0];

      if (account) {
        throw new Error(
          "Cannot retreive an account. Please refresh the browser."
        );
      }
      return accounts[0];
    }
  );

  useEffect(() => {
    const mutator = (accounts) => mutate(accounts[0] ?? null);
    provider?.on("accountsChanged", mutator);
    return () => {
      provider?.removeListener("accountsChanged", mutator);
    };
  }, [provider]);

  return {
    data,
    isAdmin: (data && adminAddresses[web3.utils.keccak256(data)]) ?? false,
    mutate,
    ...rest,
  };
};
