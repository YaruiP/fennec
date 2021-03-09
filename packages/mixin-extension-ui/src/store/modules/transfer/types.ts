import type { TransferRequest } from "@foxone/mixin-extension-base/state/wallet";

export const TransferModulePerfix = "transfer/";

export const MutationTypes = {
  UPDATE_TRANSFER_URLS: "UPDATE_TRANSFER_URLS"
} as const;

export type State = {
  transferRequests: TransferRequest[];
};

export type Getters = {};

export type Actions = {};
