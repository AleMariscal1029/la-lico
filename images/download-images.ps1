# Script para descargar todas las imágenes de bebidas alcohólicas

$images = @{
    "vodka-premium.jpg" = "https://images.pexels.com/photos/5946920/pexels-photo-5946920.jpeg?auto=compress&cs=tinysrgb&w=800"
    "ron-anejo.jpg" = "https://images.pexels.com/photos/5947043/pexels-photo-5947043.jpeg?auto=compress&cs=tinysrgb&w=800"
    "gin-premium.jpg" = "https://images.pexels.com/photos/6937845/pexels-photo-6937845.jpeg?auto=compress&cs=tinysrgb&w=800"
    "mojito.jpg" = "https://images.pexels.com/photos/1304540/pexels-photo-1304540.jpeg?auto=compress&cs=tinysrgb&w=800"
    "martini.jpg" = "https://images.pexels.com/photos/2795026/pexels-photo-2795026.jpeg?auto=compress&cs=tinysrgb&w=800"
    "margarita.jpg" = "https://images.pexels.com/photos/5947043/pexels-photo-5947043.jpeg?auto=compress&cs=tinysrgb&w=800"
}

foreach ($image in $images.GetEnumerator()) {
    Write-Host "Descargando $($image.Key)..." -ForegroundColor Green
    try {
        Invoke-WebRequest -Uri $image.Value -OutFile $image.Key -ErrorAction Stop
        Write-Host "✓ $($image.Key) descargada exitosamente" -ForegroundColor Cyan
    } catch {
        Write-Host "✗ Error descargando $($image.Key): $_" -ForegroundColor Red
    }
}

Write-Host "`nDescarga completada!" -ForegroundColor Yellow
