---
uid: Microsoft.Quantum.Measurement.MeasureAllZ
title: MeasureAllZ operation
ms.date: 3/24/2021 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: operation
qsharp.namespace: Microsoft.Quantum.Measurement
qsharp.name: MeasureAllZ
qsharp.summary: Jointly measures a register of qubits in the Pauli Z basis.
---

# MeasureAllZ operation

Namespace: [Microsoft.Quantum.Measurement](xref:Microsoft.Quantum.Measurement)

Package: [Microsoft.Quantum.Standard](https://nuget.org/packages/Microsoft.Quantum.Standard)


Jointly measures a register of qubits in the Pauli Z basis.

```qsharp
operation MeasureAllZ (register : Qubit[]) : Result
```


## Description

Measures a register of qubits in the $Z \otimes Z \otimes \cdots \otimes Z$

## Input

### register : [Qubit](xref:microsoft.quantum.lang-ref.qubit)[]

The register to be measured.



## Output : __invalid<Result>__

The result of measuring $Z \otimes Z \otimes \cdots \otimes Z$.