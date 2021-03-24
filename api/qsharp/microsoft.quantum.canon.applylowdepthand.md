---
uid: Microsoft.Quantum.Canon.ApplyLowDepthAnd
title: ApplyLowDepthAnd operation
ms.date: 3/24/2021 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: operation
qsharp.namespace: Microsoft.Quantum.Canon
qsharp.name: ApplyLowDepthAnd
qsharp.summary: >-
  Inverts a given target qubit if and only if both control qubits are in
  the 1 state, with T-depth 1, using measurement to perform the adjoint
  operation.
---

# ApplyLowDepthAnd operation

Namespace: [Microsoft.Quantum.Canon](xref:Microsoft.Quantum.Canon)

Package: [Microsoft.Quantum.Standard](https://nuget.org/packages/Microsoft.Quantum.Standard)


Inverts a given target qubit if and only if both control qubits are in

```qsharp
operation ApplyLowDepthAnd (control1 : Qubit, control2 : Qubit, target : Qubit) : Unit is Adj + Ctl
```


## Description

Inverts `target` if and only if both controls are 1, but assumes that

## Input

### control1 : [Qubit](xref:microsoft.quantum.lang-ref.qubit)

First control qubit


### control2 : [Qubit](xref:microsoft.quantum.lang-ref.qubit)

Second control qubit


### target : [Qubit](xref:microsoft.quantum.lang-ref.qubit)

Target auxiliary qubit; must be in state 0



## Output : [Unit](xref:microsoft.quantum.lang-ref.unit)



## References

- Cody Jones: "Novel constructions for the fault-tolerant Toffoli gate",