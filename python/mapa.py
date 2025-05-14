import folium
from folium.plugins import Draw

# Create a map centered at Itaim Bibi, São Paulo
m = folium.Map(location=[-23.5883, -46.6868], zoom_start=14)

# Add drawing controls to allow pin placement
draw = Draw(
    draw_options={
        'polyline': False,
        'polygon': False,
        'circle': False,
        'rectangle': False,
        'circlemarker': True,
        'marker': True
    },
    edit_options={'edit': False}
)
draw.add_to(m)

# Add pins for the existing establishments
folium.Marker(
    location=[-23.5883, -46.6868],
    popup=folium.Popup(
        """
        <div style="width: 250px; padding: 10px; background-color: #e6f3ff; border-radius: 5px; border: 2px solid #007bff; font-family: Arial; overflow: hidden;">
            <img src="img/Screenshot 2025-04-17 at 11.02.27.png" alt="PsicoCenter" style="width: 80px; height: auto; float: left; margin-right: 10px;">
            <div style="margin-left: 90px;">
                <h3 style="color: #007bff; margin: 0 0 5px;">PsicoCenter</h3>
                <p style="margin: 0; font-size: 12px;">Academia especializada em tratamentos de transtornos mentais com o uso da prática de esportes e outras atividades regenerativas.</p>
            </div>
        </div>
        """,
        max_width=300
    ),
    icon=folium.Icon(color='blue', icon='user-md')
).add_to(m)

folium.Marker(
    location=[-23.5870, -46.6840],
    popup=folium.Popup(
        """
        <div style="width: 250px; padding: 10px; background-color: #e6ffe6; border-radius: 5px; border: 2px solid #28a745; font-family: Arial; overflow: hidden;">
            <img src="img/Screenshot 2025-04-17 at 11.02.41.png" alt="NovaClin & Citolab" style="width: 80px; height: auto; float: left; margin-right: 10px;">
            <div style="margin-left: 90px;">
                <h3 style="color: #28a745; margin: 0 0 5px;">NovaClin & Citolab</h3>
                <p style="margin: 0; font-size: 12px;">Clínica odontológica moderna e acolhedora, dedicada a proporcionar cuidados de excelência para a saúde bucal de toda a família.</p>
            </div>
        </div>
        """,
        max_width=300
    ),
    icon=folium.Icon(color='green', icon='plus-square')
).add_to(m)

folium.Marker(
    location=[-23.5900, -46.6880],
    popup=folium.Popup(
        """
        <div style="width: 250px; padding: 10px; background-color: #f3e6ff; border-radius: 5px; border: 2px solid #6f42c1; font-family: Arial; overflow: hidden;">
            <img src="img/Screenshot 2025-04-17 at 11.02.49.png" alt="Wellington Pet" style="width: 80px; height: auto; float: left; margin-right: 10px;">
            <div style="margin-left: 90px;">
                <h3 style="color: #6f42c1; margin: 0 0 5px;">Wellington Pet</h3>
                <p style="margin: 0; font-size: 12px;">Pet Shop com enfoque em produtos e serviços de qualidade para que seu companheiro de casa esteja o mais limpo e nutrido possível.</p>
            </div>
        </div>
        """,
        max_width=300
    ),
    icon=folium.Icon(color='purple', icon='paw')
).add_to(m)

# Add pins for the new establishments
folium.Marker(
    location=[-23.5890, -46.6870],
    popup=folium.Popup(
        """
        <div style="width: 250px; padding: 10px; background-color: #e6ffe6; border-radius: 5px; border: 2px solid #28a745; font-family: Arial; overflow: hidden;">
            <img src="img/itaim1.jpg" alt="Cia da Saúde" style="width: 80px; height: auto; float: left; margin-right: 10px;">
            <div style="margin-left: 90px;">
                <h3 style="color: #28a745; margin: 0 0 5px;">Cia da Saúde</h3>
                <p style="margin: 0; font-size: 12px;">Loja de produtos naturais com foco em bem-estar, oferecendo uma ampla variedade de itens para uma vida mais saudável e equilibrada.</p>
            </div>
        </div>
        """,
        max_width=300
    ),
    icon=folium.Icon(color='green', icon='leaf')
).add_to(m)

folium.Marker(
    location=[-23.5880, -46.6850],
    popup=folium.Popup(
        """
        <div style="width: 250px; padding: 10px; background-color: #ffe6e6; border-radius: 5px; border: 2px solid #dc3545; font-family: Arial; overflow: hidden;">
            <img src="img/itaim2.jpeg" alt="Kitpack" style="width: 80px; height: auto; float: left; margin-right: 10px;">
            <div style="margin-left: 90px;">
                <h3 style="color: #dc3545; margin: 0 0 5px;">Kitpack</h3>
                <p style="margin: 0; font-size: 12px;">Loja de materiais de limpeza e descartáveis, dedicada a fornecer produtos práticos e de qualidade para o dia a dia.</p>
            </div>
        </div>
        """,
        max_width=300
    ),
    icon=folium.Icon(color='red', icon='shopping-bag')
).add_to(m)

folium.Marker(
    location=[-23.5865, -46.6865],
    popup=folium.Popup(
        """
        <div style="width: 250px; padding: 10px; background-color: #e6f3ff; border-radius: 5px; border: 2px solid #007bff; font-family: Arial; overflow: hidden;">
            <img src="img/itaim3.jpg" alt="Drogaria Nova Esperança" style="width: 80px; height: auto; float: left; margin-right: 10px;">
            <div style="margin-left: 90px;">
                <h3 style="color: #007bff; margin: 0 0 5px;">Drogaria Nova Esperança</h3>
                <p style="margin: 0; font-size: 12px;">Farmácia moderna que oferece medicamentos e produtos de saúde com atendimento acolhedor e de confiança.</p>
            </div>
        </div>
        """,
        max_width=300
    ),
    icon=folium.Icon(color='blue', icon='plus-square')
).add_to(m)

folium.Marker(
    location=[-23.5895, -46.6835],
    popup=folium.Popup(
        """
        <div style="width: 250px; padding: 10px; background-color: #fff3cd; border-radius: 5px; border: 2px solid #ffc107; font-family: Arial; overflow: hidden;">
            <img src="img/itaim4.jpeg" alt="Koa Food Market" style="width: 80px; height: auto; float: left; margin-right: 10px;">
            <div style="margin-left: 90px;">
                <h3 style="color: #ffc107; margin: 0 0 5px;">Koa Food Market</h3>
                <p style="margin: 0; font-size: 12px;">Mercado de alimentos saudáveis e orgânicos, com opções frescas e sustentáveis para uma alimentação consciente.</p>
            </div>
        </div>
        """,
        max_width=300
    ),
    icon=folium.Icon(color='orange', icon='utensils')
).add_to(m)

# Save the map to an HTML file
m.save('interactive_map.html')