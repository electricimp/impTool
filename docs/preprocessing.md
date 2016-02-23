# Preprocessing

## Directives

The following directives are supported: 

- #include
- #define
- #undef
- #if
- #ifdef
- #ifndef
- #error
- #elif
- #else
- #endif

## Variables

Variables can be inserted in the code by using `#{VARNAME}` syntax. \

Variables can come from different sources:

### Predefined Variables
 
- __FILE__
- __LINE__

### User Variables

Variables defined with `#define` statement.

### Environment Variables

With the `#{env:VARNAME}` syntax environment variables can be inserted in the code. Access to the IMP_BUILD_API_KEY is not allowed.