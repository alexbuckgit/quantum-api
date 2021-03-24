---
uid: Microsoft.Quantum.Arithmetic.ApplyMajorityInPlace
title: ApplyMajorityInPlace operation
ms.date: 3/24/2021 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: operation
qsharp.namespace: Microsoft.Quantum.Arithmetic
qsharp.name: ApplyMajorityInPlace
qsharp.summary: >-
  Applies the three-qubit majority operation in-place on a register of
  qubits.
---

# ApplyMajorityInPlace operation

Namespace: [Microsoft.Quantum.Arithmetic](xref:Microsoft.Quantum.Arithmetic)

Package: [Microsoft.Quantum.Standard](https://nuget.org/packages/Microsoft.Quantum.Standard)


Applies the three-qubit majority operation in-place on a register of

```qsharp
operation ApplyMajorityInPlace (output : Qubit, input : Qubit[]) : Unit is Adj + Ctl
```


## Description

This operation computes the majority function in-place on 3 qubits.

## Input

### output : [Qubit](xref:microsoft.quantum.lang-ref.qubit)

First input qubit. Note that the output is computed in-place


### input : [Qubit](xref:microsoft.quantum.lang-ref.qubit)[]

Second and third input qubits.



## Output : [Unit](xref:microsoft.quantum.lang-ref.unit)
