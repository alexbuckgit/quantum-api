---
uid: Microsoft.Quantum.Intrinsic.AsRCczTClifford.RFrac
title: RFrac operation
ms.date: 3/24/2021 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: operation
qsharp.namespace: Microsoft.Quantum.Intrinsic.AsRCczTClifford
qsharp.name: RFrac
qsharp.summary: >-
  Applies a rotation about the given Pauli axis by an angle specified
  as a dyadic7 fraction.

  \begin{align}
  R_{\mu}(n, k) \mathrel{:=}
  e^{i \pi n \sigma_{\mu} / 2^k},
  \end{align}
  where $\mu \in \{I, X, Y, Z\}$.

  > [!WARNING]
  > This operation uses the **opposite** sign convention from
  > @"microsoft.quantum.intrinsic.r".
---

# RFrac operation

Namespace: [Microsoft.Quantum.Intrinsic.AsRCczTClifford](xref:Microsoft.Quantum.Intrinsic.AsRCczTClifford)

Package: [FaultTolerantDecompositionsTests](https://nuget.org/packages/FaultTolerantDecompositionsTests)


Applies a rotation about the given Pauli axis by an angle specified

```qsharp
operation RFrac (pauli : Pauli, numerator : Int, power : Int, qubit : Qubit) : Unit is Adj + Ctl
```


## Input

### pauli : [Pauli](xref:microsoft.quantum.lang-ref.pauli)

Pauli operator to be exponentiated to form the rotation.


### numerator : [Int](xref:microsoft.quantum.lang-ref.int)

Numerator in the dyadic fraction representation of the angle


### power : [Int](xref:microsoft.quantum.lang-ref.int)

Power of two specifying the denominator of the angle by which


### qubit : [Qubit](xref:microsoft.quantum.lang-ref.qubit)

Qubit to which the gate should be applied.



## Output : [Unit](xref:microsoft.quantum.lang-ref.unit)



## Remarks

Equivalent to: