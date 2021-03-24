---
uid: Microsoft.Quantum.Canon.ApplyP
title: ApplyP operation
ms.date: 3/24/2021 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: operation
qsharp.namespace: Microsoft.Quantum.Canon
qsharp.name: ApplyP
qsharp.summary: >-
  Given a single-qubit Pauli operator, applies the corresponding operation
  to a single qubit.
---

# ApplyP operation

Namespace: [Microsoft.Quantum.Canon](xref:Microsoft.Quantum.Canon)

Package: [Microsoft.Quantum.Standard](https://nuget.org/packages/Microsoft.Quantum.Standard)


Given a single-qubit Pauli operator, applies the corresponding operation

```qsharp
operation ApplyP (pauli : Pauli, target : Qubit) : Unit is Adj + Ctl
```


## Input

### pauli : [Pauli](xref:microsoft.quantum.lang-ref.pauli)

The Pauli operator to be applied.


### target : [Qubit](xref:microsoft.quantum.lang-ref.qubit)

The qubit to which `pauli` is to be applied as an operation.



## Output : [Unit](xref:microsoft.quantum.lang-ref.unit)



## Example

The following are equivalent: