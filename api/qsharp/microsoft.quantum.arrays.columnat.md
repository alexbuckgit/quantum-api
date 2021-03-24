---
uid: Microsoft.Quantum.Arrays.ColumnAt
title: ColumnAt function
ms.date: 3/24/2021 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: function
qsharp.namespace: Microsoft.Quantum.Arrays
qsharp.name: ColumnAt
qsharp.summary: Extracts a column from a matrix.
---

# ColumnAt function

Namespace: [Microsoft.Quantum.Arrays](xref:Microsoft.Quantum.Arrays)

Package: [Microsoft.Quantum.Standard](https://nuget.org/packages/Microsoft.Quantum.Standard)


Extracts a column from a matrix.

```qsharp
function ColumnAt<'T> (column : Int, matrix : 'T[][]) : 'T[]
```


## Description

This function extracts a column in a matrix in row-wise order.

## Input

### column : [Int](xref:microsoft.quantum.lang-ref.int)

Column of the matrix


### matrix : 'T[][]

2-dimensional matrix in row-wise order



## Output : 'T[]



## Type Parameters

### 'T

The type of each element of `matrix`.

## Example

```qsharp

## See Also

- [Microsoft.Quantum.Arrays.Transposed](xref:Microsoft.Quantum.Arrays.Transposed)
- [Microsoft.Quantum.Arrays.Diagonal](xref:Microsoft.Quantum.Arrays.Diagonal)