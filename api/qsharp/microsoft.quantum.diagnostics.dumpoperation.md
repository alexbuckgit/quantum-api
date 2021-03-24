---
uid: Microsoft.Quantum.Diagnostics.DumpOperation
title: DumpOperation operation
ms.date: 3/24/2021 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: operation
qsharp.namespace: Microsoft.Quantum.Diagnostics
qsharp.name: DumpOperation
qsharp.summary: >-
  Given an operation, displays diagnostics about
  the operation that are made available by the current
  execution target.
---

# DumpOperation operation

Namespace: [Microsoft.Quantum.Diagnostics](xref:Microsoft.Quantum.Diagnostics)

Package: [Microsoft.Quantum.Standard](https://nuget.org/packages/Microsoft.Quantum.Standard)


Given an operation, displays diagnostics about

```qsharp
operation DumpOperation (nQubits : Int, op : (Qubit[] => Unit is Adj)) : Unit
```


## Input

### nQubits : [Int](xref:microsoft.quantum.lang-ref.int)

The number of qubits on which the given operation acts.


### op : [Qubit](xref:microsoft.quantum.lang-ref.qubit)[] => [Unit](xref:microsoft.quantum.lang-ref.unit)  is Adj

The operation that is to be diagnosed.



## Output : [Unit](xref:microsoft.quantum.lang-ref.unit)



## Example

When run on the quantum simulator target, the following snippet will

## Remarks

Calling this operation has no observable effect from within