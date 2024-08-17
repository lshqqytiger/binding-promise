type NativeBinding = (promise: Promise<any>) => boolean;
interface Module {
  isPending: NativeBinding;
  isFulfilled: NativeBinding;
  isRejected: NativeBinding;
}

const { isPending, isFulfilled, isRejected } =
  require("../build/Release/binding.node") as Module; // TODO: cross-platform support

export { isPending, isFulfilled, isRejected };
