---
uid: Microsoft.Quantum.AmplitudeAmplification.FixedPointReflectionPhases
title: FixedPointReflectionPhases function
ms.date: 3/24/2021 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: function
qsharp.namespace: Microsoft.Quantum.AmplitudeAmplification
qsharp.name: FixedPointReflectionPhases
qsharp.summary: >-
  Computes partial reflection phases for fixed-point amplitude
  amplification.
---

# FixedPointReflectionPhases function

Namespace: [Microsoft.Quantum.AmplitudeAmplification](xref:Microsoft.Quantum.AmplitudeAmplification)

Package: [Microsoft.Quantum.Standard](https://nuget.org/packages/Microsoft.Quantum.Standard)


Computes partial reflection phases for fixed-point amplitude

```qsharp
function FixedPointReflectionPhases (nQueries : Int, successMin : Double) : Microsoft.Quantum.AmplitudeAmplification.ReflectionPhases
```


## Input

### nQueries : [Int](xref:microsoft.quantum.lang-ref.int)

Number of queries to the state preparation oracle. Must be an odd


### successMin : [Double](xref:microsoft.quantum.lang-ref.double)

Target minimum success probability.



## Output : [ReflectionPhases](xref:Microsoft.Quantum.AmplitudeAmplification.ReflectionPhases)

Array of phases that can be used in fixed-point amplitude amplification

## References

We use the phases in "Fixed-Point Amplitude Amplification with