---
uid: Microsoft.Quantum.Characterization.SingleQubitProcessTomographyMeasurement
title: SingleQubitProcessTomographyMeasurement operation
ms.date: 3/24/2021 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: operation
qsharp.namespace: Microsoft.Quantum.Characterization
qsharp.name: SingleQubitProcessTomographyMeasurement
qsharp.summary: >-
  Performs a single-qubit process tomography measurement in the Pauli
  basis, given a particular channel of interest.
---

# SingleQubitProcessTomographyMeasurement operation

Namespace: [Microsoft.Quantum.Characterization](xref:Microsoft.Quantum.Characterization)

Package: [Microsoft.Quantum.Standard](https://nuget.org/packages/Microsoft.Quantum.Standard)


Performs a single-qubit process tomography measurement in the Pauli

```qsharp
operation SingleQubitProcessTomographyMeasurement (preparation : Pauli, measurement : Pauli, channel : (Qubit => Unit)) : Result
```


## Input

### preparation : [Pauli](xref:microsoft.quantum.lang-ref.pauli)

The Pauli basis element $P$ in which a qubit is to be prepared.


### measurement : [Pauli](xref:microsoft.quantum.lang-ref.pauli)

The Pauli basis element $Q$ in which a qubit is to be measured.


### channel : [Qubit](xref:microsoft.quantum.lang-ref.qubit) => [Unit](xref:microsoft.quantum.lang-ref.unit) 

A single qubit channel $\Lambda$ whose behavior is being estimated



## Output : __invalid<Result>__

The Result `Zero` with probability

## Remarks

The distribution over results returned by this operation is a special