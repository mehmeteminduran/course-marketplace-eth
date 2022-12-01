import { useEffect, useState } from "react";
import useSWR from "swr";

const adminAddresses = {
  "0x954a6575c1996fd46acf61625891ffdc5aaab4e27fa4a139e5f94a008488eecf": true,
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
