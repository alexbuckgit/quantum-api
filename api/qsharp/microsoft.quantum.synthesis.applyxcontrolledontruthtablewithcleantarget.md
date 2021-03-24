---
uid: Microsoft.Quantum.Synthesis.ApplyXControlledOnTruthTableWithCleanTarget
title: ApplyXControlledOnTruthTableWithCleanTarget operation
ms.date: 3/24/2021 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: operation
qsharp.namespace: Microsoft.Quantum.Synthesis
qsharp.name: ApplyXControlledOnTruthTableWithCleanTarget
qsharp.summary: >-
  Applies the @"microsoft.quantum.intrinsic.x" operation on `target`, if the Boolean function `func` evaluates
  to true for the classical assignment in `controlRegister`.
---

# ApplyXControlledOnTruthTableWithCleanTarget operation

Namespace: [Microsoft.Quantum.Synthesis](xref:Microsoft.Quantum.Synthesis)

Package: [Microsoft.Quantum.Standard](https://nuget.org/packages/Microsoft.Quantum.Standard)


Applies the @"microsoft.quantum.intrinsic.x" operation on `target`, if the Boolean function `func` evaluates

```qsharp
operation ApplyXControlledOnTruthTableWithCleanTarget (func : BigInt, controlRegister : Qubit[], target : Qubit) : Unit is Adj + Ctl
```


## Description

This operation implements a special case of @"microsoft.quantum.synthesis.applyxcontrolledontruthtable",

## Input

### func : [BigInt](xref:microsoft.quantum.lang-ref.bigint)

Boolean truth table represented as big integer


### controlRegister : [Qubit](xref:microsoft.quantum.lang-ref.qubit)[]

Register of control qubits


### target : [Qubit](xref:microsoft.quantum.lang-ref.qubit)

Target qubit (must be in $\ket{0}$ state)



## Output : [Unit](xref:microsoft.quantum.lang-ref.unit)



## See Also

- [Microsoft.Quantum.Synthesis.ApplyXControlledOnTruthTable](xref:Microsoft.Quantum.Synthesis.ApplyXControlledOnTruthTable)