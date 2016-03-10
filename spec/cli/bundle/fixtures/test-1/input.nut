#include "inc-a.nut"

#define SOMEVAR1 123
#define SOMEVAR2 256

#undef SOMEVAR1

#if SOMEVAR1 == 123
  // should not be included
#elif SOMEVAR2 == 0
  // should not be included
#elif SOMEVAR2 == 256
  // should be included
#endif

#ifdef SOMEVAR2
  // should be included
#endif

