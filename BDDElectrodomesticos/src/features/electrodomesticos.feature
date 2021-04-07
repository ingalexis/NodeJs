@Electrodomesticos
Feature: Pruebas a la venta y consulta de Electrodomesticos
    Se valida la venta, registro de factura y visualización de electrodomesticos


Scenario Outline: Vender electrodomestico
    Given se consulte un electrodomestico con el codigo <codigo>
    When la consulta arroje el valor <codigo>
    Then agregar el producto a la factura con el codigo <codigo>
    Given el producto este registrado
    Then registrar la factura
    When la factura este registrada
    Then el total de la factura es <total>

    Examples:
    |codigo |total  |
    |1      |1000   |

Scenario: Mostrar stock
    Given se ingrese a la aplicacion
    Then mostrar electrodomesticos con descripciones y precios