export enum PromiseState {
  PENDING,
  FULFILLED,
  REJECTED,
}

interface Module {
  /**
   * Returns whether `promise` is pending.
   *
   * @param promise `Promise` object.
   * @returns whether `promise` is pending.
   */
  isPending(promise: Promise<any>): boolean;
  /**
   * Returns `false`.
   *
   * @param unknown anything.
   * @returns false.
   */
  isPending(unknown: unknown): false;
  /**
   * Returns whether `promise` is fulfilled.
   *
   * @param promise `Promise` object.
   * @returns whether `promise` is fulfilled.
   */
  isFulfilled(promise: Promise<any>): boolean;
  /**
   * Returns `false`.
   *
   * @param unknown anything.
   * @returns false.
   */
  isFulfilled(unknown: unknown): false;
  /**
   * Returns whether `promise` is rejected.
   *
   * @param promise `Promise` object.
   * @returns whether `promise` is rejected.
   */
  isRejected(promise: Promise<any>): boolean;
  /**
   * Returns `false`.
   *
   * @param unknown anything.
   * @returns false.
   */
  isRejected(unknown: unknown): false;
  /**
   * `getState` takes **only** `Promise`s.
   * If not, it will throw `TypeError`.
   *
   * @param promise `Promise` object.
   * @returns PromiseState.
   * @throws TypeError.
   */
  getState(promise: Promise<any>): PromiseState;
}

const { isPending, isFulfilled, isRejected, getState } =
  require("../build/Release/binding.node") as Module;

export { isPending, isFulfilled, isRejected, getState };
