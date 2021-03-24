---
uid: Microsoft.Quantum.Simulation.Simulators.QCTraceSimulators.Circuits.ExpFracZZZ
title: ExpFracZZZ operation
ms.date: 3/24/2021 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: operation
qsharp.namespace: Microsoft.Quantum.Simulation.Simulators.QCTraceSimulators.Circuits
qsharp.name: ExpFracZZZ
qsharp.summary: ExpFracZZZ is exp( i pi k/2ⁿ Z⊗Z⊗Z )
---

# ExpFracZZZ operation

Namespace: [Microsoft.Quantum.Simulation.Simulators.QCTraceSimulators.Circuits](xref:Microsoft.Quantum.Simulation.Simulators.QCTraceSimulators.Circuits)

Package: [Microsoft.Quantum.Simulators](https://nuget.org/packages/Microsoft.Quantum.Simulators)


ExpFracZZZ is exp( i pi k/2ⁿ Z⊗Z⊗Z )

```qsharp
operation ExpFracZZZ (numerator : Int, power : Int, a : Qubit, b : Qubit, c : Qubit) : Unit is Adj
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


### c : [Qubit](xref:microsoft.quantum.lang-ref.qubit)

third target qubit



## Output : [Unit](xref:microsoft.quantum.lang-ref.unit)



## Remarks

Using the fact that C₁X₂ (I⊗Z) C₁X₂ = Z⊗Z