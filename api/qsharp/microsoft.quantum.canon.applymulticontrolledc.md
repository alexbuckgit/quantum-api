---
uid: Microsoft.Quantum.Canon.ApplyMultiControlledC
title: ApplyMultiControlledC operation
ms.date: 3/24/2021 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: operation
qsharp.namespace: Microsoft.Quantum.Canon
qsharp.name: ApplyMultiControlledC
qsharp.summary: >-
  Applies a multiply controlled version of a singly controlled
  operation.
  The modifier `C` indicates that the single-qubit operation is controllable.
---

# ApplyMultiControlledC operation

Namespace: [Microsoft.Quantum.Canon](xref:Microsoft.Quantum.Canon)

Package: [Microsoft.Quantum.Standard](https://nuget.org/packages/Microsoft.Quantum.Standard)


Applies a multiply controlled version of a singly controlled

```qsharp
operation ApplyMultiControlledC (singlyControlledOp : (Qubit[] => Unit), ccnot : Microsoft.Quantum.Canon.CCNOTop, controls : Qubit[], targets : Qubit[]) : Unit is Ctl
```


## Input

### singlyControlledOp : [Qubit](xref:microsoft.quantum.lang-ref.qubit)[] => [Unit](xref:microsoft.quantum.lang-ref.unit) 

An operation controlled on a single qubit.


### ccnot : [CCNOTop](xref:Microsoft.Quantum.Canon.CCNOTop)

The controlled-controlled-NOT gate to use for the construction.


### controls : [Qubit](xref:microsoft.quantum.lang-ref.qubit)[]

The qubits that `singlyControlledOp` is to be controlled on.


### targets : [Qubit](xref:microsoft.quantum.lang-ref.qubit)[]

The target qubits that `singlyControlledOp` acts upon.



## Output : [Unit](xref:microsoft.quantum.lang-ref.unit)



## Remarks

This operation uses only clean ancilla qubits.

## References

- [ *Michael A. Nielsen , Isaac L. Chuang*,

## See Also

- [Microsoft.Quantum.Canon.ApplyMultiControlledCA](xref:Microsoft.Quantum.Canon.ApplyMultiControlledCA)