---
uid: Microsoft.Quantum.Arithmetic.AddFxP
title: AddFxP operation
ms.date: 3/24/2021 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: operation
qsharp.namespace: Microsoft.Quantum.Arithmetic
qsharp.name: AddFxP
qsharp.summary: Adds two fixed-point numbers stored in quantum registers.
---

# AddFxP operation

Namespace: [Microsoft.Quantum.Arithmetic](xref:Microsoft.Quantum.Arithmetic)

Package: [Microsoft.Quantum.Numerics](https://nuget.org/packages/Microsoft.Quantum.Numerics)


Adds two fixed-point numbers stored in quantum registers.

```qsharp
operation AddFxP (fp1 : Microsoft.Quantum.Arithmetic.FixedPoint, fp2 : Microsoft.Quantum.Arithmetic.FixedPoint) : Unit is Adj + Ctl
```


## Description

Given two fixed-point registers respectively in states $\ket{f_1}$ and $\ket{f_2}$,

## Input

### fp1 : [FixedPoint](xref:Microsoft.Quantum.Arithmetic.FixedPoint)

First fixed-point number


### fp2 : [FixedPoint](xref:Microsoft.Quantum.Arithmetic.FixedPoint)

Second fixed-point number, will be updated to contain the sum of the



## Output : [Unit](xref:microsoft.quantum.lang-ref.unit)



## Remarks

The current implementation requires the two fixed-point numbers