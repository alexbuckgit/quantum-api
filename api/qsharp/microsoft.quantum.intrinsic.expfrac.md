---
uid: Microsoft.Quantum.Intrinsic.ExpFrac
title: ExpFrac operation
ms.date: 3/24/2021 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: operation
qsharp.namespace: Microsoft.Quantum.Intrinsic
qsharp.name: ExpFrac
qsharp.summary: >-
  Applies the exponential of a multi-qubit Pauli operator
  with an argument given by a dyadic fraction.
---

# ExpFrac operation

Namespace: [Microsoft.Quantum.Intrinsic](xref:Microsoft.Quantum.Intrinsic)

Package: [Microsoft.Quantum.Type3.Core](https://nuget.org/packages/Microsoft.Quantum.Type3.Core)


Applies the exponential of a multi-qubit Pauli operator

```qsharp
operation ExpFrac (paulis : Pauli[], numerator : Int, power : Int, qubits : Qubit[]) : Unit is Adj + Ctl
```


## Description

\begin{align}

## Input

### paulis : [Pauli](xref:microsoft.quantum.lang-ref.pauli)[]

Array of single-qubit Pauli values indicating the tensor product


### numerator : [Int](xref:microsoft.quantum.lang-ref.int)

Numerator ($k$) in the dyadic fraction representation of the angle


### power : [Int](xref:microsoft.quantum.lang-ref.int)

Power of two ($n$) specifying the denominator of the angle by which


### qubits : [Qubit](xref:microsoft.quantum.lang-ref.qubit)[]

Register to apply the given rotation to.



## Output : [Unit](xref:microsoft.quantum.lang-ref.unit)
