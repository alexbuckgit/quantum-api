---
uid: Microsoft.Quantum.Canon.ApplyToSubregister
title: ApplyToSubregister operation
ms.date: 3/24/2021 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: operation
qsharp.namespace: Microsoft.Quantum.Canon
qsharp.name: ApplyToSubregister
qsharp.summary: >-
  Applies an operation to a subregister of a register, with qubits
  specified by an array of their indices.
---

# ApplyToSubregister operation

Namespace: [Microsoft.Quantum.Canon](xref:Microsoft.Quantum.Canon)

Package: [Microsoft.Quantum.Standard](https://nuget.org/packages/Microsoft.Quantum.Standard)


Applies an operation to a subregister of a register, with qubits

```qsharp
operation ApplyToSubregister (op : (Qubit[] => Unit), idxs : Int[], target : Qubit[]) : Unit
```


## Input

### op : [Qubit](xref:microsoft.quantum.lang-ref.qubit)[] => [Unit](xref:microsoft.quantum.lang-ref.unit) 

Operation to apply to subregister.


### idxs : [Int](xref:microsoft.quantum.lang-ref.int)[]

Array of indices, indicating to which qubits the operation will be applied.


### target : [Qubit](xref:microsoft.quantum.lang-ref.qubit)[]

Register on which the operation acts.



## Output : [Unit](xref:microsoft.quantum.lang-ref.unit)



## Example

Create three qubit state $\frac{1}{\sqrt{2}}\ket{0}\_2(\ket{0}\_1\ket{0}_3+\ket{1}\_1\ket{1}_3)$:

## See Also

- [Microsoft.Quantum.Canon.ApplyToSubregisterA](xref:Microsoft.Quantum.Canon.ApplyToSubregisterA)
- [Microsoft.Quantum.Canon.ApplyToSubregisterC](xref:Microsoft.Quantum.Canon.ApplyToSubregisterC)
- [Microsoft.Quantum.Canon.ApplyToSubregisterCA](xref:Microsoft.Quantum.Canon.ApplyToSubregisterCA)