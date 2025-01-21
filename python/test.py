from decimal import Decimal, getcontext
import locale

# configura o output no formato brasileiro
locale.setlocale(locale.LC_ALL, 'pt_BR.UTF-8')

getcontext().prec = 8

a = 0
b = 0

def divide_():
    x = Decimal(a) / Decimal(b)

    # # verifica se o resultado é inteiro
    # if str_x == x.to_integral():
    #     formatted_x = locale.format_string("%d", int(x), grouping=True)
    # else:
    #     if x == x.from_float(0.2):
    #         formatted_x = locale.format_string("%.1f", x, grouping=True)
    #     else:
    #         formatted_x = locale.format_string("%.2f", x, grouping=True)

    if x == x.to_integral():
        formatted_x = locale.format_string("%d", int(x), grouping=True)
    else:
        formatted_x = locale.format_string("%.2f", x, grouping=True)


    print(formatted_x)


a = 4.2
b = 2

divide_()

