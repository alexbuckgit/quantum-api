---
uid: Microsoft.Quantum.Canon.ApplyIfA
title: ApplyIfA operation
ms.date: 3/24/2021 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: operation
qsharp.namespace: Microsoft.Quantum.Canon
qsharp.name: ApplyIfA
qsharp.summary: Applies a adjointable operation conditioned on a classical bit.
---

# ApplyIfA operation

Namespace: [Microsoft.Quantum.Canon](xref:Microsoft.Quantum.Canon)

Package: [Microsoft.Quantum.Standard](https://nuget.org/packages/Microsoft.Quantum.Standard)


Applies a adjointable operation conditioned on a classical bit.

```qsharp
operation ApplyIfA<'T> (op : ('T => Unit is Adj), bit : Bool, target : 'T) : Unit is Adj
```


## Description

Given an operation `op` and a bit value `bit`, applies `op` to the `target`

## Input

### op : 'T => [Unit](xref:microsoft.quantum.lang-ref.unit)  is Adj

An operation to be conditionally applied.


### bit : [Bool](xref:microsoft.quantum.lang-ref.bool)

a boolean that controls whether op is applied or not.


### target : 'T

The input to which the operation is applied.



## Output : [Unit](xref:microsoft.quantum.lang-ref.unit)



## Type Parameters

### 'T

The input type of the operation to be conditionally applied.

## Example

The following prepares a register of qubits into a computational basis

## See Also

- [Microsoft.Quantum.Canon.ApplyIfC](xref:Microsoft.Quantum.Canon.ApplyIfC)
- [Microsoft.Quantum.Canon.ApplyIfA](xref:Microsoft.Quantum.Canon.ApplyIfA)
- [Microsoft.Quantum.Canon.ApplyIfCA](xref:Microsoft.Quantum.Canon.ApplyIfCA)