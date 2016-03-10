<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->


- [Imports](#imports)
  - [Import from Local File](#import-from-local-file)
  - [Import from URL](#import-from-url)
  - [Import from Git Repository](#import-from-git-repository)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Imports

### Import from Local File

```
@include "file-path.nut"
```

### Import from URL

```
@include "http://example.com/file.nut"
@include "https://example.com/file.nut"
```

### Import from Git Repository

```squirrel
@include "hostname.com/repository.git/<path>/<to>/<file>@<ref>"
```

For example, from GitHub:

```squirrel
@include "github.com/<user>/<repository>.git/<file>@<ref>"

// head of the default branch
@include "github.com/electricimp/APDS90007.git/APDS9007.class.nut"

// head of the "master" branch
@include "github.com/electricimp/APDS90007.git/APDS9007.class.nut@master"

// latest tag
@include "github.com/electricimp/APDS90007.git/APDS9007.class.nut@latest"

// existing tag "v1.0.1"
@include "github.com/electricimp/APDS90007.git/APDS9007.class.nut@v1.0.1"
```
