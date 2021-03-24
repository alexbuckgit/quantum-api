---
uid: Microsoft.Quantum.Intrinsic
title: Microsoft.Quantum.Intrinsic namespace
ms.date: 3/24/2021 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: namespace
qsharp.name: Microsoft.Quantum.Intrinsic
qsharp.summary: ''
---

# Microsoft.Quantum.Intrinsic namespace




<!-- summaries -->

## Operations

| Name | Summary |
|------|---------|
|[ApplyConditionallyIntrinsic](xref:Microsoft.Quantum.Intrinsic.ApplyConditionallyIntrinsic) |
|[ApplyIfElseIntrinsic](xref:Microsoft.Quantum.Intrinsic.ApplyIfElseIntrinsic) |
|[ApplyUncontrolledSWAP](xref:Microsoft.Quantum.Intrinsic.ApplyUncontrolledSWAP) |Applies the SWAP gate to a pair of qubits. Note that the Controlled functor is not supported.
|[Assert](xref:Microsoft.Quantum.Intrinsic.Assert) |> [!WARNING]
> Assert has been deprecated. Please use <xref:Microsoft.Quantum.Diagnostics.AssertMeasurement> instead.


|[AssertProb](xref:Microsoft.Quantum.Intrinsic.AssertProb) |> [!WARNING]
> AssertProb has been deprecated. Please use <xref:Microsoft.Quantum.Diagnostics.AssertMeasurementProbability> instead.


|[CCNOT](xref:Microsoft.Quantum.Intrinsic.CCNOT) |Applies the doubly controlled–NOT (CCNOT) gate to three qubits.
|[CNOT](xref:Microsoft.Quantum.Intrinsic.CNOT) |Applies the controlled-NOT (CNOT) gate to a pair of qubits.
|[Exp](xref:Microsoft.Quantum.Intrinsic.Exp) |Applies the exponential of a multi-qubit Pauli operator.
|[ExpFrac](xref:Microsoft.Quantum.Intrinsic.ExpFrac) |Applies the exponential of a multi-qubit Pauli operator with an argument given by a dyadic fraction.
|[H](xref:Microsoft.Quantum.Intrinsic.H) |Applies the Hadamard transformation to a single qubit.
|[I](xref:Microsoft.Quantum.Intrinsic.I) |Performs the identity operation (no-op) on a single qubit.
|[K](xref:Microsoft.Quantum.Intrinsic.K) |
|[K__Body](xref:Microsoft.Quantum.Intrinsic.K__Body) |
|[K__Ctl](xref:Microsoft.Quantum.Intrinsic.K__Ctl) |
|[M](xref:Microsoft.Quantum.Intrinsic.M) |Performs a measurement of a single qubit in the Pauli $Z$ basis.
|[Measure](xref:Microsoft.Quantum.Intrinsic.Measure) |Performs a joint measurement of one or more qubits in the specified Pauli bases.
|[R](xref:Microsoft.Quantum.Intrinsic.R) |Applies a rotation about the given Pauli axis.
|[R1](xref:Microsoft.Quantum.Intrinsic.R1) |Applies a rotation about the $\ket{1}$ state by a given angle.
|[R1Frac](xref:Microsoft.Quantum.Intrinsic.R1Frac) |Applies a rotation about the $\ket{1}$ state by an angle specified as a dyadic fraction.
|[RFrac](xref:Microsoft.Quantum.Intrinsic.RFrac) |Applies a rotation about the given Pauli axis by an angle specified as a dyadic fraction.
|[Random](xref:Microsoft.Quantum.Intrinsic.Random) |> [!WARNING]
> Random has been deprecated. Please use <xref:Microsoft.Quantum.Random.DrawCategorical> instead.

The random operation takes an array of doubles as input, and returns a randomly-selected index into the array as an `Int`. The probability of selecting a specific index is proportional to the value of the array element at that index. Array elements that are equal to zero are ignored and their indices are never returned. If any array element is less than zero, or if no array element is greater than zero, then the operation fails.
|[Reset](xref:Microsoft.Quantum.Intrinsic.Reset) |Given a single qubit, measures it and ensures it is in the |0⟩ state such that it can be safely released.
|[ResetAll](xref:Microsoft.Quantum.Intrinsic.ResetAll) |Given an array of qubits, measure them and ensure they are in the |0⟩ state such that they can be safely released.
|[Rx](xref:Microsoft.Quantum.Intrinsic.Rx) |
|[Ry](xref:Microsoft.Quantum.Intrinsic.Ry) |Applies a rotation about the $y$-axis by a given angle.
|[Rz](xref:Microsoft.Quantum.Intrinsic.Rz) |Applies a rotation about the $z$-axis by a given angle.
|[S](xref:Microsoft.Quantum.Intrinsic.S) |Applies the π/4 phase gate to a single qubit.
|[SWAP](xref:Microsoft.Quantum.Intrinsic.SWAP) |Applies the SWAP gate to a pair of qubits.
|[T](xref:Microsoft.Quantum.Intrinsic.T) |Applies the π/8 gate to a single qubit.
|[X](xref:Microsoft.Quantum.Intrinsic.X) |Applies the Pauli $X$ gate.
|[Y](xref:Microsoft.Quantum.Intrinsic.Y) |Applies the Pauli $Y$ gate.
|[Z](xref:Microsoft.Quantum.Intrinsic.Z) |Applies the Pauli $Z$ gate.

## Functions

| Name | Summary |
|------|---------|
|[INFINITY](xref:Microsoft.Quantum.Intrinsic.INFINITY) |
|[INFINITY__Body](xref:Microsoft.Quantum.Intrinsic.INFINITY__Body) |
|[IsInf](xref:Microsoft.Quantum.Intrinsic.IsInf) |
|[IsInf__Body](xref:Microsoft.Quantum.Intrinsic.IsInf__Body) |
|[IsNan](xref:Microsoft.Quantum.Intrinsic.IsNan) |
|[IsNan__Body](xref:Microsoft.Quantum.Intrinsic.IsNan__Body) |
|[IsNegativeInfinity](xref:Microsoft.Quantum.Intrinsic.IsNegativeInfinity) |
|[IsNegativeInfinity__Body](xref:Microsoft.Quantum.Intrinsic.IsNegativeInfinity__Body) |
|[Message](xref:Microsoft.Quantum.Intrinsic.Message) |Logs a message.
|[NAN](xref:Microsoft.Quantum.Intrinsic.NAN) |
|[NAN__Body](xref:Microsoft.Quantum.Intrinsic.NAN__Body) |

<!-- /summaries -->