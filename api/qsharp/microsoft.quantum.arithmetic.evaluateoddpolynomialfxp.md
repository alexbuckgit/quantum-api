---
uid: Microsoft.Quantum.Arithmetic.EvaluateOddPolynomialFxP
title: EvaluateOddPolynomialFxP operation
ms.date: 3/24/2021 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: operation
qsharp.namespace: Microsoft.Quantum.Arithmetic
qsharp.name: EvaluateOddPolynomialFxP
qsharp.summary: Evaluates an odd polynomial in a fixed-point representation.
---

# EvaluateOddPolynomialFxP operation

Namespace: [Microsoft.Quantum.Arithmetic](xref:Microsoft.Quantum.Arithmetic)

Package: [Microsoft.Quantum.Numerics](https://nuget.org/packages/Microsoft.Quantum.Numerics)


Evaluates an odd polynomial in a fixed-point representation.

```qsharp
operation EvaluateOddPolynomialFxP (coefficients : Double[], fpx : Microsoft.Quantum.Arithmetic.FixedPoint, result : Microsoft.Quantum.Arithmetic.FixedPoint) : Unit is Adj + Ctl
```


## Input

### coefficients : [Double](xref:microsoft.quantum.lang-ref.double)[]

Coefficients of the odd polynomial as a double array, i.e., the array


### fpx : [FixedPoint](xref:Microsoft.Quantum.Arithmetic.FixedPoint)

Input fixed-point number for which to evaluate the polynomial.


### result : [FixedPoint](xref:Microsoft.Quantum.Arithmetic.FixedPoint)

Output fixed-point number which will hold P(x). Must be in state



## Output : [Unit](xref:microsoft.quantum.lang-ref.unit)
