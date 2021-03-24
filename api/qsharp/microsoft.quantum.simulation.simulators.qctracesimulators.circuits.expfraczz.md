---
uid: Microsoft.Quantum.Simulation.Simulators.QCTraceSimulators.Circuits.ExpFracZZ
title: ExpFracZZ operation
ms.date: 3/24/2021 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: operation
qsharp.namespace: Microsoft.Quantum.Simulation.Simulators.QCTraceSimulators.Circuits
qsharp.name: ExpFracZZ
qsharp.summary: ExpFracZZ is exp( i π k/2ⁿ Z⊗Z )
---

# ExpFracZZ operation

Namespace: [Microsoft.Quantum.Simulation.Simulators.QCTraceSimulators.Circuits](xref:Microsoft.Quantum.Simulation.Simulators.QCTraceSimulators.Circuits)

Package: [Microsoft.Quantum.Simulators](https://nuget.org/packages/Microsoft.Quantum.Simulators)


ExpFracZZ is exp( i π k/2ⁿ Z⊗Z )

```qsharp
operation ExpFracZZ (numerator : Int, power : Int, a : Qubit, b : Qubit) : Unit is Adj
```


## Input

### numerator : [Int](xref:microsoft.quantum.lang-ref.int)

k


### power : [Int](xref:microsoft.quantum.lang-ref.int)

n


### a : [Qubit](xref:microsoft.quantum.lang-ref.qubit)

first target qubit


### b : [Qubit](xref:microsoft.quantum.lang-ref.qubit)

second target qubit



## Output : [Unit](xref:microsoft.quantum.lang-ref.unit)



## Remarks

We use notation C₁X₂ for CNOT gate with the target