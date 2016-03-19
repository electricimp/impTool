<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->


- [Module System – Proposal](#module-system-%E2%80%93-proposal)
  - [Rationale](#rationale)
  - [Compatibility](#compatibility)
  - [Exporting](@exporting)
  - [Importing](@importing)
  - [Bootstrapping](#bootstrapping)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

# Module System – Proposal

*v.0.0.2*

## Rationale

Module system enables flexible dependency management and allows for dependency resolution using topological sort, e.g. determining the correct execution order based on individual modules dependencies.

## Compatibility

In a *bundling* process code compatible with the current Squirrel compilers is generated.

Modules that support `@import` and `@export` instructions should be compatible with traditional inclusion into the global context.

Vise-versa, modules that do not use module system should be parsed and `@export` statements should be generated automatically.

## Exporting

Modules can export symbols via `@export` statement:

```squirrel
// exporting a symbol
@export Symbol

// aliasing
@export Symbol as Alias

// exporting default symbol
@export default Symbol
```

## Importing

Modules can import dependencies via `@import` statement.

```squirrel
// importing default exports (following two statements are equal)
@import Anything from Module
@import {default as Anything} from Module

// importing a symbol
@import {Symbol} from Module

// aliasing
@import {Symbol as Alias} from Module

// importing all exports
@import {*} from Module
```

## Bootstrapping

In a *bundling* process dependencies are resolved, modules are fetched from repositories, wrapped into closures that can take imported symbols as arguments and return exports. The *bootstrapping* code is then generated.

The resulting Squirrel code may look like:

```squirrel
function __module__A() {
  // @export MyClass as HiThereClass

  local MyClass = class {
    function hello() {
      server.log("hi there!");
    }
  }

  return {
      "MyClass": HiThereClass
  };
}

function __module__B(HiThereClass) {
  // @import {HiThereClass} from A;
  // @export default doSmth

  function doSmth() {
    HiThereClass().hello();
  }

  return doSmth;
}

// bootstrap
function __main__() {
  // correct order and used modules are
  // determined via dependency resolution
  // with topo-sort of the dependency graph
  local __module__A_exports = __module__A();
  local __module__B_exports = __module__A(__module__A_exports.HiThereClass);

  //
  local abc <- __module__B_exports._default;
  abc();
}

__main__();
```
