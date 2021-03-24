---
uid: Microsoft.Quantum.Arithmetic.CompareGreaterThanFxP
title: CompareGreaterThanFxP operation
ms.date: 3/24/2021 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: operation
qsharp.namespace: Microsoft.Quantum.Arithmetic
qsharp.name: CompareGreaterThanFxP
qsharp.summary: >-
  Compares two fixed-point numbers stored in quantum registers, and
  controls a flip on the result.
---

# CompareGreaterThanFxP operation

Namespace: [Microsoft.Quantum.Arithmetic](xref:Microsoft.Quantum.Arithmetic)

Package: [Microsoft.Quantum.Numerics](https://nuget.org/packages/Microsoft.Quantum.Numerics)


Compares two fixed-point numbers stored in quantum registers, and

```qsharp
operation CompareGreaterThanFxP (fp1 : Microsoft.Quantum.Arithmetic.FixedPoint, fp2 : Microsoft.Quantum.Arithmetic.FixedPoint, result : Qubit) : Unit is Adj + Ctl
```


## Input

### fp1 : [FixedPoint](xref:Microsoft.Quantum.Arithmetic.FixedPoint)

First fixed-point number to be compared.


### fp2 : [FixedPoint](xref:Microsoft.Quantum.Arithmetic.FixedPoint)

Second fixed-point number to be compared.


### result : [Qubit](xref:microsoft.quantum.lang-ref.qubit)

Result of the comparison. Will be flipped if `fp1 > fp2`.



## Output : [Unit](xref:microsoft.quantum.lang-ref.unit)



## Remarks

The current implementation requires the two fixed-point numbers