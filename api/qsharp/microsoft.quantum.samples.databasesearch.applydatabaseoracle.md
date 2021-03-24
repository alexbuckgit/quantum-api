---
uid: Microsoft.Quantum.Samples.DatabaseSearch.ApplyDatabaseOracle
title: ApplyDatabaseOracle operation
ms.date: 3/24/2021 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: operation
qsharp.namespace: Microsoft.Quantum.Samples.DatabaseSearch
qsharp.name: ApplyDatabaseOracle
qsharp.summary: >-
  Given a qubit to use to store a mark bit and a register corresponding
  to a database, marks the first qubit conditioned on the register
  state being the all-ones state |11…1〉.
---

# ApplyDatabaseOracle operation

Namespace: [Microsoft.Quantum.Samples.DatabaseSearch](xref:Microsoft.Quantum.Samples.DatabaseSearch)

Package: [DatabaseSearchSample](https://nuget.org/packages/DatabaseSearchSample)


Given a qubit to use to store a mark bit and a register corresponding

```qsharp
operation ApplyDatabaseOracle (markedQubit : Qubit, databaseRegister : Qubit[]) : Unit is Adj + Ctl
```


## Input

### markedQubit : [Qubit](xref:microsoft.quantum.lang-ref.qubit)

A qubit to be targeted by an `X` operation controlled on whether


### databaseRegister : [Qubit](xref:microsoft.quantum.lang-ref.qubit)[]

A register representing the target of a query to the database.



## Output : [Unit](xref:microsoft.quantum.lang-ref.unit)



## Remarks

Implements the operation