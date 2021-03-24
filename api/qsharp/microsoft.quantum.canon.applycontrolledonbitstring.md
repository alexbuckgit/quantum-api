---
uid: Microsoft.Quantum.Canon.ApplyControlledOnBitString
title: ApplyControlledOnBitString operation
ms.date: 3/24/2021 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: operation
qsharp.namespace: Microsoft.Quantum.Canon
qsharp.name: ApplyControlledOnBitString
qsharp.summary: >-
  Applies a unitary operation on the target register, controlled on a a state specified by a given
  bit mask.
---

# ApplyControlledOnBitString operation

Namespace: [Microsoft.Quantum.Canon](xref:Microsoft.Quantum.Canon)

Package: [Microsoft.Quantum.Standard](https://nuget.org/packages/Microsoft.Quantum.Standard)


Applies a unitary operation on the target register, controlled on a a state specified by a given

```qsharp
operation ApplyControlledOnBitString<'T> (bits : Bool[], oracle : ('T => Unit is Adj + Ctl), controlRegister : Qubit[], targetRegister : 'T) : Unit is Adj + Ctl
```


## Input

### bits : [Bool](xref:microsoft.quantum.lang-ref.bool)[]

The bit string to control the given unitary operation on.


### oracle : 'T => [Unit](xref:microsoft.quantum.lang-ref.unit)  is Adj + Ctl

The unitary operation to be applied on the target register.


### controlRegister : [Qubit](xref:microsoft.quantum.lang-ref.qubit)[]

A quantum register that controls application of `oracle`.


### targetRegister : 'T

The target register to be passed to `oracle` as an input.



## Output : [Unit](xref:microsoft.quantum.lang-ref.unit)



## Type Parameters

### 'T



## Remarks

The pattern given by `bits` may be shorter than `controlRegister`,