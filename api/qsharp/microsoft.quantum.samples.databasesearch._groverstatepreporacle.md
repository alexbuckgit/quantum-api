---
uid: Microsoft.Quantum.Samples.DatabaseSearch._GroverStatePrepOracle
title: _GroverStatePrepOracle operation
ms.date: 3/24/2021 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: operation
qsharp.namespace: Microsoft.Quantum.Samples.DatabaseSearch
qsharp.name: _GroverStatePrepOracle
qsharp.summary: >-
  Preparation of start state from database oracle and oracle `U` that
  creates a uniform superposition over database indices.
---

# _GroverStatePrepOracle operation

Namespace: [Microsoft.Quantum.Samples.DatabaseSearch](xref:Microsoft.Quantum.Samples.DatabaseSearch)

Package: [DatabaseSearchSample](https://nuget.org/packages/DatabaseSearchSample)


Preparation of start state from database oracle and oracle `U` that

```qsharp
operation _GroverStatePrepOracle (markedElements : Int[], idxMarkedQubit : Int, startQubits : Qubit[]) : Unit is Adj + Ctl
```


## Input

### markedElements : [Int](xref:microsoft.quantum.lang-ref.int)[]

Indices to marked elements in database.


### idxMarkedQubit : [Int](xref:microsoft.quantum.lang-ref.int)

Index to `MarkedQubit`.


### startQubits : [Qubit](xref:microsoft.quantum.lang-ref.qubit)[]

The collection of the n+1 qubits `MarkedQubit` and `databaseRegister`



## Output : [Unit](xref:microsoft.quantum.lang-ref.unit)



## Remarks

This implements an oracle `DU` that prepares the start state