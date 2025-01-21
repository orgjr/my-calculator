from decimal import Decimal, getcontext
import locale

# locale para exibir saídas no formato brasileiro
locale.setlocale(locale.LC_ALL, 'pt_BR.UTF-8')

# Configura outputs com até 10 dígitos
getcontext().prec = 10

a = 0
b = 0

def divide_():

    # faz a operação
    x = Decimal(a) / Decimal(b)
    
    # converte o resultado para string para verificar o número de casas decimais
    x_str = f"{x:.10f}".rstrip('0').rstrip('.')

    # Verifica se o número é inteiro
    if '.' in x_str:
        # Separa a parte inteira e a parte decimal
        integer_, decimal_ = x_str.split('.')
    else:
        integer_, decimal_ = x_str, ''

    # Formata a parte inteira com separadores de milhar
    formatted_integer = locale.format_string("%d", int(integer_), grouping=True)

    # Junta a parte inteira formatada com a parte decimal (se existir)
    if decimal_:
        formatted = f"{formatted_integer},{decimal_}"
    else:
        formatted = formatted_integer

    print(formatted)


a = 5001.32
b = 4.33


divide_()