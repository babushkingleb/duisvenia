return isExpr(type) ? error('Expression references can not be signals.') : isField(type) ? scope.fieldRef(value) : isCompare(type) ? scope.compareRef(value) : scope.signalRef(value.signal);
