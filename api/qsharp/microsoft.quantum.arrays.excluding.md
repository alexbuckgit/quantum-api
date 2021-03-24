---
uid: Microsoft.Quantum.Arrays.Excluding
title: Excluding function
ms.date: 3/24/2021 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: function
qsharp.namespace: Microsoft.Quantum.Arrays
qsharp.name: Excluding
qsharp.summary: >-
  Returns an array containing the elements of another array,
  excluding elements at a given list of indices.
---

# Excluding function

Namespace: [Microsoft.Quantum.Arrays](xref:Microsoft.Quantum.Arrays)

Package: [Microsoft.Quantum.Standard](https://nuget.org/packages/Microsoft.Quantum.Standard)


Returns an array containing the elements of another array,

```qsharp
function Excluding<'T> (remove : Int[], array : 'T[]) : 'T[]
```


## Input

### remove : [Int](xref:microsoft.quantum.lang-ref.int)[]

An array of indices denoting which elements should be excluded


### array : 'T[]

Array of which the values in the output array are taken.



## Output : 'T[]

An array `output` such that `output[0]` is the first element

## Type Parameters

### 'T

The type of the array elements.

## Example

```qsharp