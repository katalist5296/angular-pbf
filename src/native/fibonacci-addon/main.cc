#include <napi.h>

class FibonacciAddon : public Napi::Addon<FibonacciAddon> {
 public:
  FibonacciAddon(Napi::Env env, Napi::Object exports) {
    DefineAddon(exports, {
      InstanceMethod("get", &FibonacciAddon::Get),
      InstanceMethod("clear", &FibonacciAddon::Clear),
    });
  }

  Napi::Value Get(const Napi::CallbackInfo& info) {
    Napi::Env env = info.Env();
    currentIndex++;

    Napi::Array outputArray = Napi::Array::New(env, currentIndex);
    std::vector<double> fibonacciArray = generateArray(currentIndex);

    for (uint32_t i = 0; i < currentIndex; i++) {
      outputArray[i] = Napi::Number::New(env, double(fibonacciArray[i]));
    }

    return outputArray;
  }

  void Clear(const Napi::CallbackInfo& info) {
    currentIndex = 0;
  }

  std::vector<double> generateArray(int max) {
  	std::vector<double> retval = {0, 1};
  	for(int i = 2; i <= max; i++) {
  		retval.push_back(retval[i-1] + retval[i-2]);
  	}

  	return retval;
  }

  uint32_t currentIndex = 0;
};

NODE_API_NAMED_ADDON(addon, FibonacciAddon)
