---
uid: Microsoft.Quantum.Intrinsic.Measure
title: Measure operation
ms.date: 3/24/2021 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: operation
qsharp.namespace: Microsoft.Quantum.Intrinsic
qsharp.name: Measure
qsharp.summary: >-
  Performs a joint measurement of one or more qubits in the
  specified Pauli bases.
---

# Measure operation

Namespace: [Microsoft.Quantum.Intrinsic](xref:Microsoft.Quantum.Intrinsic)

Package: [Microsoft.Quantum.Type3.Core](https://nuget.org/packages/Microsoft.Quantum.Type3.Core)


Performs a joint measurement of one or more qubits in the

```qsharp
operation Measure (bases : Pauli[], qubits : Qubit[]) : Result
```


## Description

The output result is given by the distribution:

## Input

### bases : [Pauli](xref:microsoft.quantum.lang-ref.pauli)[]

Array of single-qubit Pauli values indicating the tensor product


### qubits : [Qubit](xref:microsoft.quantum.lang-ref.qubit)[]

Register of qubits to be measured.



## Output : __invalid<Result>__

`Zero` if the $+1$ eigenvalue is observed, and `One` if

## Remarks

If the basis array and qubit array are different lengths, then the