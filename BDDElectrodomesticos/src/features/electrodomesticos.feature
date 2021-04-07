@Electrodomesticos
Feature: Pruebas a la venta y consulta de Electrodomesticos
    Se valida la venta, registro de factura y visualización de electrodomesticos

Scenario Outline: Consulta electrodomestico
    Given se consulte un electrodomestico con el codigo <codigo>
    When la consulta arroje el valor <codigo>
    
    Examples:
    |codigo |
    |1      |
    |0      |

Scenario Outline: Vender electrodomestico
    Given agregar el producto a la factura con el codigo <codigo>
    When el producto este registrado
    Then registrar la factura
    When la factura este registrada
    Then el total de la factura es <total>

    Examples:
    |codigo |total  |
    |1      |1000   |
    |0      |800    |

Scenario: Mostrar stock
    Given se ingrese a la aplicacion
    Then mostrar electrodomesticos con descripciones y precios