#include "pxt.h"

namespace char16 {
  uint32_t getNumber16At(unsigned char s[],int32_t n)
  {
	return s[n*2]*256 + s[n*2+1];
  }
}
