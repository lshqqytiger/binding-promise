#include <node.h>
#include <v8.h>

#define CREATE_METHOD(state)                                                   \
  [](const v8::FunctionCallbackInfo<v8::Value> &args) {                        \
    const auto isolate = args.GetIsolate();                                    \
    if (!args[0]->IsPromise()) {                                               \
      args.GetReturnValue().Set(v8::Boolean::New(isolate, false));             \
      return;                                                                  \
    }                                                                          \
    const auto promise = args[0].As<v8::Promise>();                            \
    args.GetReturnValue().Set(                                                 \
        v8::Boolean::New(isolate, promise->State() == state));                 \
  }

static void init(v8::Local<v8::Object> exports, v8::Local<v8::Value> module,
                 v8::Local<v8::Context> context) {
  NODE_SET_METHOD(exports, "isPending",
                  CREATE_METHOD(v8::Promise::PromiseState::kPending));
  NODE_SET_METHOD(exports, "isFulfilled",
                  CREATE_METHOD(v8::Promise::PromiseState::kFulfilled));
  NODE_SET_METHOD(exports, "isRejected",
                  CREATE_METHOD(v8::Promise::PromiseState::kRejected));
}

NODE_MODULE(NODE_GYP_MODULE_NAME, init);
