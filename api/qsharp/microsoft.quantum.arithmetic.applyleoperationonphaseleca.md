---
uid: Microsoft.Quantum.Arithmetic.ApplyLEOperationOnPhaseLECA
title: ApplyLEOperationOnPhaseLECA operation
ms.date: 3/24/2021 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: operation
qsharp.namespace: Microsoft.Quantum.Arithmetic
qsharp.name: ApplyLEOperationOnPhaseLECA
qsharp.summary: >-
  Applies an operation that takes a
  <xref:microsoft.quantum.arithmetic.phaselittleendian> register as input
  on a target register of type <xref:microsoft.quantum.arithmetic.littleendian>.
---

# ApplyLEOperationOnPhaseLECA operation

Namespace: [Microsoft.Quantum.Arithmetic](xref:Microsoft.Quantum.Arithmetic)

Package: [Microsoft.Quantum.Standard](https://nuget.org/packages/Microsoft.Quantum.Standard)


Applies an operation that takes a

```qsharp
operation ApplyLEOperationOnPhaseLECA (op : (Microsoft.Quantum.Arithmetic.LittleEndian => Unit is Adj + Ctl), target : Microsoft.Quantum.Arithmetic.PhaseLittleEndian) : Unit is Adj + Ctl
```


## Input

### op : [LittleEndian](xref:Microsoft.Quantum.Arithmetic.LittleEndian) => [Unit](xref:microsoft.quantum.lang-ref.unit)  is Adj + Ctl

The operation to be applied.


### target : [PhaseLittleEndian](xref:Microsoft.Quantum.Arithmetic.PhaseLittleEndian)

The register to which the operation is applied.



## Output : [Unit](xref:microsoft.quantum.lang-ref.unit)



## Remarks

The register is transformed to `LittleEndian` by the use of

## See Also

- [Microsoft.Quantum.Canon.ApplyLEOperationonPhaseLE](xref:Microsoft.Quantum.Canon.ApplyLEOperationonPhaseLE)
- [Microsoft.Quantum.Canon.ApplyLEOperationonPhaseLEA](xref:Microsoft.Quantum.Canon.ApplyLEOperationonPhaseLEA)
- [Microsoft.Quantum.Canon.ApplyLEOperationonPhaseLEC](xref:Microsoft.Quantum.Canon.ApplyLEOperationonPhaseLEC)