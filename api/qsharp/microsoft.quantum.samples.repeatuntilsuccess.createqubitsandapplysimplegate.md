---
uid: Microsoft.Quantum.Samples.RepeatUntilSuccess.CreateQubitsAndApplySimpleGate
title: CreateQubitsAndApplySimpleGate operation
ms.date: 3/24/2021 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: operation
qsharp.namespace: Microsoft.Quantum.Samples.RepeatUntilSuccess
qsharp.name: CreateQubitsAndApplySimpleGate
qsharp.summary: >-
  Example of a Repeat-until-success algorithm implementing a circuit
  that achieves (I + i√2X)/√3 by Paetznick & Svore. This is the smallest
  circuit found in the referenced work and described in figure 8.
---

# CreateQubitsAndApplySimpleGate operation

Namespace: [Microsoft.Quantum.Samples.RepeatUntilSuccess](xref:Microsoft.Quantum.Samples.RepeatUntilSuccess)

Package: [RepeatUntilSuccess](https://nuget.org/packages/RepeatUntilSuccess)


Example of a Repeat-until-success algorithm implementing a circuit

```qsharp
operation CreateQubitsAndApplySimpleGate (inputValue : Bool, inputBasis : Pauli, limit : Int) : (Bool, Result, Int)
```


## Input

### inputValue : [Bool](xref:microsoft.quantum.lang-ref.bool)

Boolean value for input qubit (true maps to One, false maps to Zero)


### inputBasis : [Pauli](xref:microsoft.quantum.lang-ref.pauli)

Pauli basis in which to prepare input qubit


### limit : [Int](xref:microsoft.quantum.lang-ref.int)

Integer limit to number of repeats of circuit



## Output : ([Bool](xref:microsoft.quantum.lang-ref.bool),__invalid<Result>__,[Int](xref:microsoft.quantum.lang-ref.int))



## Remarks

The program executes a circuit on a "target" qubit using an "auxiliary"

## References

- [ *Adam Paetznick, Krysta M. Svore*,