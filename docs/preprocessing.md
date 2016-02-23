<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->


- [Preprocessing](#preprocessing)
  - [Directives](#directives)
  - [Variables](#variables)
    - [Predefined Variables](#predefined-variables)
    - [User Variables](#user-variables)
    - [Environment Variables](#environment-variables)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

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
 
- \_\_FILE\_\_
- \_\_LINE\_\_

### User Variables

Variables defined with `#define` statement.

### Environment Variables

With the `#{env:VARNAME}` syntax environment variables can be inserted in the code. Access to the IMP_BUILD_API_KEY is not allowed.
